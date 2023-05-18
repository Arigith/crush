from pydantic import BaseModel
from passlib.context import CryptContext

pwd_ctxt=CryptContext(schemes=['bcrypt'], deprecated='auto')

class Hash():
    def bcrypt(password:str):
        return pwd_ctxt.hash(password)
    
    def verify(plain_password, hashed_password):
        return pwd_ctxt.verify(plain_password, hashed_password)

class BaseHero(BaseModel):
    hero_name:str
    hero_element:str
    hero_rarity:str
    hero_job:str

class BaseRune(BaseModel):
    hero_rune_1:str
    hero_rune_2:str
    hero_rune_3:str

class BaseTarget(BaseModel):
    hero_rune_target_1:str
    hero_rune_target_1_percentage:int
    hero_rune_target_2:str
    hero_rune_target_2_percentage:int
    hero_rune_target_3:str
    hero_rune_target_3_percentage:int
    hero_rune_target_4:str
    hero_rune_target_4_percentage:int
    hero_rune_target_5:str
    hero_rune_target_5_percentage:int
    hero_rune_target_6:str
    hero_rune_target_6_percentage:int
    hero_rune_target_7:str
    hero_rune_target_7_percentage:int

class BaseInfo(BaseModel):
    hero_info:str

class HeroBase(BaseHero):
    class Config():
        orm_mode=True

class HeroRune(BaseRune):
    class Config():
        orm_mode=True

class HeroRuneTarget(BaseTarget):
    class Config():
        orm_mode=True

class HeroInfo(BaseInfo):
    class Config():
        orm_mode=True

class AllHero(HeroInfo, HeroRuneTarget, HeroRune, HeroBase):
    class Config():
        orm_mode=True
        
class Userdetails(BaseModel):
    username:str
    password:str

class UserCommit(Userdetails):
    class Config():
        orm_mode=True
        
class UserList(BaseModel):
    userid:int
    username:str

class UserListCommit(UserList):
    class Config():
        orm_mode=True

class Login(BaseModel):
    username:str
    password:str

class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    username:str | None = None