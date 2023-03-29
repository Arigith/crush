from datetime import datetime, timedelta
from jose import JWTError, jwt
import schemas

SECRET_KEY='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDAzODIzMSwiaWF0IjoxNjgwMDM4MjMxfQ.fJc0lZHQyICJc7zXi1364crcO1PKLT7nnD-bwmwYss4'
ALGORITHM='HS256'
ACCESS_TOKEN_EXPIRE_MINUTES=30

def create_access_token(
    data:dict,
    expires_delta:timedelta | None = None
):
    to_encode=data.copy()
    if expires_delta:
        expire=datetime.utcnow()+expires_delta
    else:
        expire=datetime.utcnow()+expires_delta(minutes = 15)
    to_encode.update({'exp':expire})
    encode_jwt=jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encode_jwt

def verify_token(
    token:str,
    credentials_exception
):
    try:
        payload=jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username:str=payload.get('sub')
        if username is None:
            raise credentials_exception
        token_data=schemas.TokenData(username=username)
    except JWTError:
        raise credentials_exception