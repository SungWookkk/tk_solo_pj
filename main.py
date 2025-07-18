from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
app = FastAPI()
# 정적 출력물 서빙
app.mount("/", StaticFiles(directory="frontend/out", html=True), name="static")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
