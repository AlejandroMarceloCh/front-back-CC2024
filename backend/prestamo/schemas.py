from pydantic import BaseModel
from typing import Optional
from datetime import date

class Prestamo(BaseModel):
    usuario_username: str
    libro_id: int
    fecha_inicio: date
    fecha_fin: date
