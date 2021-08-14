# typeorm transaction management decorator

그냥.. nestjs를 쓰자....

결국 new를 이용하여 인스턴스를 생성하지 않기 위해선 DI를 적용하면 되는데... 결국 구조가 nestjs가 되어간다...

머 그래도 express에서 transaction 관리를 하고 싶으면 이렇게 하면 된다.

데코레이터 붙은 서비스 메서드 정의 -> 라우터에서 해당 서비스 등록 

트랜잭션 데코레이터는 두 가지 기능을 담당함

1. 커넥션 생성, 트랜잭션 시작, 커밋 또는 롤백 호출, 커넥션 반납
2. 서비스 호출 정상 또는 에러에 따라 res.send 또는 next() 호출

두 번째 기능은 별도의 메서드로 분리하는 것이 좋아보임...

### 사용 프레임워크 또는 라이브러리

* express
* typeorm
* jest, supertest

### dependencies install

```bash
$ npm i
```

### run

```bash
$ npm run start
```

### test

```bash
$ npm run test
```