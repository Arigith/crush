from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class HeroTable(Base):
    __tablename__='heros'
    id = Column(Integer, primary_key = True, index = True)
    hero_name=Column(String, default='NULL')
    hero_element=Column(String, default='NULL')
    hero_rarity=Column(String, default='NULL')
    hero_job=Column(String, default='NULL')
    hero_rune_1=Column(String, default='NULL')
    hero_rune_2=Column(String, default='NULL')
    hero_rune_3=Column(String, default='NULL')
    hero_rune_target_1=Column(String, default='NULL')
    hero_rune_target_1_percentage=Column(Integer, default=0)
    hero_rune_target_2=Column(String, default='NULL')
    hero_rune_target_2_percentage=Column(Integer, default=0)
    hero_rune_target_3=Column(String, default='NULL')
    hero_rune_target_3_percentage=Column(Integer, default=0)
    hero_rune_target_4=Column(String, default='NULL')
    hero_rune_target_4_percentage=Column(Integer, default=0)
    hero_rune_target_5=Column(String, default='NULL')
    hero_rune_target_5_percentage=Column(Integer, default=0)
    hero_rune_target_6=Column(String, default='NULL')
    hero_rune_target_6_percentage=Column(Integer, default=0)
    hero_rune_target_7=Column(String, default='NULL')
    hero_rune_target_7_percentage=Column(Integer, default=0)
    hero_info=Column(String, default='NULL')

class UserTable(Base):
    __tablename__='users'
    userid=Column(Integer, primary_key = True, index = True)
    username=Column(String)
    password=Column(String)