from fastapi import FastAPI, HTTPException
import mysql.connector
import schemas
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración CORS
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración para conectarse a las bases de datos RDS
db_config = {
    "host": "database-2.cbekimjprojv.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "user": "admin2",
    "password": "CC-utec_2024-s3"
}

# Obtener todos los préstamos
@app.get("/prestamos")
def get_prestamos():
    try:
        mydb = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_prestamo"
        )
        cursor = mydb.cursor(dictionary=True)
        cursor.execute("SELECT * FROM prestamos")
        result = cursor.fetchall()
        mydb.close()
        return {"prestamos": result}
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))

# Obtener un préstamo por su ID
@app.get("/prestamo/{id}")
def get_prestamo(id: int):
    try:
        mydb = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_prestamo"
        )
        cursor = mydb.cursor(dictionary=True)
        cursor.execute("SELECT * FROM prestamos WHERE id = %s", (id,))
        result = cursor.fetchone()
        mydb.close()
        if result:
            return {"prestamo": result}
        else:
            raise HTTPException(status_code=404, detail="Préstamo no encontrado")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))

# Agregar un nuevo préstamo
@app.post("/prestamos")
def add_prestamo(item: schemas.Prestamo):
    try:
        # Conectar a la base de datos de usuarios para verificar si el usuario existe
        user_db = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_usuario"
        )

        usuario_username = item.usuario_username
        user_cursor = user_db.cursor(dictionary=True)
        user_cursor.execute("SELECT * FROM usuarios WHERE username = %s", (usuario_username,))
        user_result = user_cursor.fetchone()
        user_db.close()

        if not user_result:
            raise HTTPException(status_code=404, detail="El usuario no existe")

        # Conectar a la base de datos de préstamos para agregar el nuevo préstamo
        prestamo_db = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_prestamo"
        )

        libro_id = item.libro_id
        fecha_inicio = item.fecha_inicio
        fecha_fin = item.fecha_fin
        estado = item.estado
        cursor = prestamo_db.cursor()
        sql = "INSERT INTO prestamos (usuario_username, libro_id, fecha_inicio, fecha_fin, estado) VALUES (%s, %s, %s, %s, %s)"
        val = (usuario_username, libro_id, fecha_inicio, fecha_fin, estado)
        cursor.execute(sql, val)
        prestamo_db.commit()
        prestamo_db.close()

        return {"message": "Préstamo agregado exitosamente"}
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))

# Modificar un préstamo
@app.put("/prestamos/{id}")
def update_prestamo(id: int, item: schemas.Prestamo):
    try:
        mydb = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_prestamo"
        )
        usuario_username = item.usuario_username
        libro_id = item.libro_id
        fecha_inicio = item.fecha_inicio
        fecha_fin = item.fecha_fin
        estado = item.estado
        cursor = mydb.cursor()
        sql = "UPDATE prestamos SET usuario_username=%s, libro_id=%s, fecha_inicio=%s, fecha_fin=%s, estado=%s WHERE id=%s"
        val = (usuario_username, libro_id, fecha_inicio, fecha_fin, estado, id)
        cursor.execute(sql, val)
        mydb.commit()
        mydb.close()
        return {"message": "Préstamo modificado exitosamente"}
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))

# Eliminar un préstamo por su ID
@app.delete("/prestamos/{id}")
def delete_prestamo(id: int):
    try:
        mydb = mysql.connector.connect(
            host=db_config["host"],
            port=db_config["port"],
            user=db_config["user"],
            password=db_config["password"],
            database="bd_api_prestamo"
        )
        cursor = mydb.cursor()
        cursor.execute("DELETE FROM prestamos WHERE id = %s", (id,))
        mydb.commit()
        mydb.close()
        return {"message": "Préstamo eliminado exitosamente"}
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))
