import pandas as pd
from collections import defaultdict
import json

# Ruta del archivo .ods
archivo = "../public/Carta.ods"

# Leer archivo ODS
df = pd.read_excel(archivo, engine="odf")

# Convertir a un diccionario agrupado por tipoProducto
productos_dict = defaultdict(list)

for _, row in df.iterrows():
    tipo = row["tipoProducto"]
    producto = {
        "nombre": row["nombre"],
        "descripcion": row["descripcion"] if not pd.isna(row["descripcion"]) else None,
        "costo": int(row["costo"]) if not pd.isna(row["costo"]) else None,
        "paraCeliacos": row["paraCeliacos"]
    }
    productos_dict[tipo].append(producto)

# Convertir a JSON
json_data = json.dumps(productos_dict, ensure_ascii=False, indent=4)

# Guardar en archivo
with open("../public/carta.json", "w", encoding="utf-8") as f:
    f.write(json_data)

print("Archivo JSON anidado por tipoProducto generado con éxito.")
