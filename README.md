# Taekwondo Backend

## 요구사항
- Python 3.12
- PostgreSQL 14+

## 실행 과정 
```bash
# 1) Poetry 설치 (설치되어 있지 않다면)
curl -sSL https://install.python-poetry.org | python3 -

# 2) 프로젝트 의존성 설치
poetry install

# 3) Backend 서버 실행
poetry run uvicorn app.main:app --reload
