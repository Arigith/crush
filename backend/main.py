from fastapi import FastAPI, HTTPException, status, Depends, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from database import engine, get_db
import models, schemas, jwt_token, oauth2
from fastapi.security import OAuth2PasswordRequestForm

app=FastAPI()

# Allows frontend to speak to backend properly
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:8000",
    "http://localhost:8000/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(engine)

# Add hero
@app.post('/hero', tags=['Login Required'])
def add_hero(request:schemas.HeroBase, db:Session=Depends(get_db)):
    data=models.HeroTable(
        hero_name=request.hero_name.lower(),
        hero_element=request.hero_element.title(),
        hero_rarity=request.hero_rarity.title(),
        hero_job=request.hero_job.title(),
    )
    db.add(data)
    db.commit()
    db.refresh(data)
    return data

# Add RUNES to given selected hero
@app.put('/hero/updatebaserune/{hero_name}', tags=['Login Required'])
def hero_runes(hero_name, request: schemas.HeroRune, db:Session=Depends(get_db)):
    data=db.query(models.HeroTable).filter(models.HeroTable.hero_name == hero_name)
    if not data.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'No character with the name {hero_name} not found')
    try:
        data.update(request.dict())
        db.commit()
    except Exception as e:
        print(f"Exception: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Error updating baserunes for {hero_name}")
    return 'Updated as requested'

# Add RUNE TARGETS to given selected hero
@app.put('/hero/updaterunetargets/{hero_name}', tags=['Login Required'])
def updatehero(hero_name, request:schemas.HeroRuneTarget, db:Session=Depends(get_db)):
    data=db.query(models.HeroTable).filter(models.HeroTable.hero_name == hero_name)
    if not data.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'No character with the name {hero_name} not found')
    data.update(request.dict())
    db.commit()
    return 'Updated as requested'

# Add INFO about hero and how to build
@app.put('/hero/updateinfo/{hero_name}', tags=['Login Required'])
def updateinfo(hero_name, request:schemas.HeroInfo, db:Session=Depends(get_db)):
    data=db.query(models.HeroTable).filter(models.HeroTable.hero_name == hero_name)
    if not data.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'No character with the name {hero_name} not found')
    data.update(request.dict())
    db.commit()
    return 'Updated as requested'

# # Delete selected hero data by id
# @app.delete('/hero/deletebyid/{id}', tags=['Login Required'])
# def delete_by_id(id, db:Session=Depends(get_db)):
#     dbi=db.query(models.HeroTable).filter(models.HeroTable.id == id)
#     if not dbi.first():
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'There is no character with the id #{id} found')
#     dbi.delete(synchronize_session=False)
#     db.commit()
#     return 'Deleted as requested'

# Delete seleted hero by name
@app.delete('/hero/deletebyname/{hero_name}', tags=['Login Required'])
def delete_by_name(hero_name, db:Session=Depends(get_db)):
    dbn=db.query(models.HeroTable).filter(models.HeroTable.hero_name == hero_name)
    if not dbn.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'There is no character with the name {hero_name} found')
    dbn.delete(synchronize_session=False)
    db.commit()
    return 'Deleted as requested'

# Get all hero data
@app.get('/hero/get_all', response_model=list[schemas.AllHero], tags=['For All Users'])
def get_all(db:Session=Depends(get_db)):
    details=db.query(models.HeroTable).all()
    return details

# get selected hero data
@app.get('/hero/show/{hero_name}', response_model=schemas.AllHero, tags=['For All Users'])
def get_by_name(hero_name, db:Session=Depends(get_db)):
    details=db.query(models.HeroTable).filter(models.HeroTable.hero_name == hero_name).first()
    if not details:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Sorry not details found with the name {hero_name}')
    return details

# Registration
@app.post('/registration', tags=['Not shown'])
def registration(
        request: schemas.UserCommit, 
        db:Session=Depends(get_db)
    ):
    data=models.UserTable(
        username=request.username,
        password=schemas.Hash.bcrypt(request.password),
    )
    db.add(data)
    db.commit()
    db.refresh(data)
    print(data)
    return 'Registration was successful'

# Delete user
@app.delete('/user/delete/{userid}', tags=['Not shown'])
def delete_userid(userid, db:Session=Depends(get_db)):
    data=db.query(models.UserTable).filter(models.UserTable.userid == userid)
    if not data.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'No data found with userid {userid}')
    data.delete(synchronize_session=False)
    db.commit()
    return 'Deleted as requested'

# Login
@app.post('/login', tags=['login'])
def user_login(request:OAuth2PasswordRequestForm=Depends(), db:Session=Depends(get_db)):
    user=db.query(models.UserTable).filter(models.UserTable.username==request.username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail='Wrong information provided. Please ensure your details are correct'
            )
    if not schemas.Hash.verify(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail='Wrong information provided. Please ensure your details are correct'
            )
    access_token_expires = jwt_token.timedelta(minutes=jwt_token.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = jwt_token.create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
        )
    return {"access_token": access_token, "token_type": "bearer"}

# Show user list after login
@app.get('/users/show', response_model=list[schemas.UserListCommit], tags=['login'])
def show_users(db:Session=Depends(get_db), get_current_user: schemas.UserList=Depends(oauth2.get_current_user)):
    users=db.query(models.UserTable).all()
    return users