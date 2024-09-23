# Blog Project - 블로그 프로젝트

<p align="center">
  <a href="https://github.com/YousefIbrahimismail" target="_blank">
    <img src="https://sam-blog-image.s3.ap-northeast-2.amazonaws.com/upload/BlogLogo.png" alt="Logo" width="290" height="290">
  </a>
</p>
<p align="center">
  <a href="https://sam-blog.site"><img src="https://img.shields.io/badge/Blog-2D8C3C?style=flat&logo=Blogger&logoColor=FFFFFF&link=https://www.sam-blog.site/detail/Blog%20Project"/></a>
</p>
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=4000&pause=5000&background=FFFFFF00&center=true&vCenter=true&multiline=true&width=435&lines=Sam-Blog-Project">
</p>

항상 프로젝트를 진행하면서 새로운 기술을 배우고 적용해왔지만, 해결 방법이나 정보를 제대로 정리하지 않아, 나중에 다시 찾을 때 많은 어려움을 겪었습니다. 이를 개선하기 위해 **블로그로 정리**하자는 결심을 하였고, 그러던 중 블로그를 **직접 만들어 보는 것도 재미있겠다는 생각**이 들어 이 프로젝트를 시작하게 되었습니다.

이 프로젝트는 나만의 기술 블로그를 만들고, 그 과정에서 배운 다양한 기술들을 기록하고 공유할 수 있는 공간을 제공하는 것을 목표로 합니다.

이 블로그 프로젝트를 통해 지속적으로 기술을 습득하고, 효율적으로 기록할 수 있는 플랫폼을 구축하게 되었습니다.

서비스 링크: <a href="https://www.sam-blog.site/" target="_blank">https://www.sam-blog.site/</a>
서버 링크: <a href="https://www.sam-blog-server.site/" target="_blank">https://www.sam-blog-server.site/</a>
블로그 링크: <a href="https://www.sam-blog.site/subjectList/Project" target="_blank">https://www.sam-blog.site/subjectList/Project</a>

### [`글작성 권한 Password`]

```bash
PW: -
```

## 주요 기능

### 1. 에디터 기능

<p align="center">
  <img src="https://github.com/user-attachments/assets/7f000cfa-9ff0-40b1-98c3-048b5ac80280" alt="이미지1 설명" width="90%" />
</p>

- **에디터 작성**: `React-quill` 써드파티 라이브러리를 사용하여 사용자가 손쉽게 글을 작성할 수 있는 에디터 기능을 구현했습니다.
- **이미지 크기 조절**: 에디터에서 작성 중 삽입한 이미지를 사용자가 자유롭게 크기 조절할 수 있도록 기능을 추가했습니다.
- **이미지 업로드**: 사용자가 에디터에서 이미지를 선택하면, **AWS S3 버킷**에 해당 이미지를 자동으로 업로드하여 저장합니다. 이를 통해 이미지를 안전하게 관리하고, 빠르게 에디터에 반영할 수 있습니다.

### 2. 음성검색 기능

<p align="center">
  <img src="https://github.com/user-attachments/assets/8649b0b7-473f-4454-b02d-b0005da973e2" alt="이미지1 설명" width="90%" />
</p>

- **음성 검색 지원**: 사용자가 키보드 입력 없이 **음성으로 검색**할 수 있는 기능을 제공하여 검색의 편리성을 높였습니다.
- **제목 및 내용 검색**: 사용자는 마이크 음성검색을 클릭한 후, 제목이나 내용에 대한 **음성 입력**을 통해 검색을 실행할 수 있습니다. 입력된 음성을 텍스트로 변환하여, **게시물의 제목**이나 **내용**에 해당하는 데이터를 실시간으로 검색합니다.
- **빠르고 정확한 검색 결과**: 음성 인식을 통해 변환된 텍스트를 기반으로, 사용자가 찾고자 하는 게시물이나 데이터를 빠르고 정확하게 찾아주는 기능을 구현했습니다. 이를 통해 더 자연스러운 사용자 경험을 제공합니다.

<br/>

## 개발도구 및 스텍

### 개발 환경

- **Node.js**: 20.10.0
- **Yarn**: 4.1.1

### 기술 스택

- **Server**: Express
- **Database**: MongoDB

### Dependencies

- **Node.js**
  - TypeScript: 5.4.3
  - Express: 4.19.2
  - React: 18.2.0
  - vite: 5.2.0
  - styled-components: 6.1.8

### 서버 설정 및 배포

- **서버 설치**: yarn install
- **서버 실행**: yarn start
- **배포 환경**: Vercel

<br/>

## 주요 기능 소개

### 1. Yarn Berry 도입

- **Yarn Berry 모노레포 구성**: 프로젝트에서 **Yarn Berry**를 도입하여 **모노레포(Monorepo)** 구조로 개발 환경을 구성했습니다. 이를 통해 서버(Server)와 클라이언트(Client) 폴더를 분리하여, 각각 독립적으로 관리하면서도 동일한 패키지 관리 툴을 사용할 수 있습니다. 이는 프로젝트의 유지보수성과 확장성을 크게 향상시키며, 개발 환경에서의 종속성 충돌을 줄여줍니다.

### 2. Jest를 활용한 단위 테스트

- **Jest 써드파티 라이브러리**를 사용하여 프로젝트 내 **단위 테스트**를 진행했습니다. Jest는 빠르고 간편하게 테스트 환경을 구성할 수 있으며, 각 컴포넌트나 함수의 기능을 독립적으로 검증하여 **코드의 안정성**을 높였습니다. 이를 통해 코드 변경 시 발생할 수 있는 **예기치 않은 오류를 사전에 발견**하고, 기능이 의도한 대로 동작하는지 확인할 수 있습니다.

### 3. React-Cookie를 사용한 권한 제어

- **React-Cookie** 라이브러리를 활용하여 **글 작성, 수정, 삭제**와 같은 주요 기능에 대한 **권한 제어**를 구현했습니다. 사용자의 쿠키 정보를 기반으로 해당 기능의 접근을 제한하거나 허용할 수 있도록 설계되어, **인증된 사용자만** 글을 작성하거나 수정, 삭제할 수 있습니다.
  또한, 쿠키에 **60분의 시간 제한**을 설정하여, 사용자가 브라우저를 종료하더라도 **60분 동안**은 **다시 로그인하거나 패스워드를 입력할 필요 없이** 동일한 권한으로 사이트를 이용할 수 있습니다. 이를 통해 사용자의 편의성을 높이면서도, **일정 시간 이후 자동 로그아웃**을 통해 보안성을 유지합니다.

### 4. React-Quill을 활용한 에디터 기능

- **React-Quill 라이브러리**를 사용하여 **에디터** 기능을 구현했습니다. 사용자는 손쉽게 글을 작성할 수 있으며, **텍스트 포맷팅**, **이미지 삽입 및 크기 조절** 등의 다양한 기능을 제공합니다. 또한, 에디터에서 추가된 이미지는 **AWS S3 버킷**에 저장되도록 설정하여, 안전한 이미지 저장 및 관리가 가능합니다. 이를 통해 사용자에게 **직관적인 글 작성 환경**을 제공합니다.

### 5. React-Speech을 사용한 음성 검색 기능

- **React-Speech 라이브러리**를 활용하여 **음성 검색 기능**을 구현했습니다. 사용자는 **음성 입력**을 통해 게시물의 제목이나 내용을 검색할 수 있으며, 이를 통해 빠르고 간편하게 원하는 정보를 찾을 수 있습니다. 이 기능은 특히 **키보드 입력 없이도** 사용자가 쉽게 정보를 검색할 수 있도록 하여 사용자 경험을 향상시킵니다.

<br/>

## 트러블 슈팅

### 1. YarnBerry 프로젝트 셋팅

- **문제**:  
  처음으로 **Yarn Berry**를 도입하면서 프로젝트 셋팅 과정에서 여러 어려움을 겪었습니다. 특히, `Vite + React` 프로젝트에서는 **Jest** 라이브러리가 자동으로 설치되지 않는 문제가 발생했습니다. 이로 인해 테스트 환경을 구성하는 데 예상보다 많은 시간이 소요되었습니다.

- **해결 방법**:  
  여러 자료를 참고하여 **Yarn Berry 모노레포 구성**과 **Vite + React**에서 **Jest**를 사용하는 방법을 직접 찾아내고 해결했습니다. 구체적으로 아래의 자료들을 참고하여 세팅 문제를 해결했습니다:

  - Yarn Berry 모노레포 구성법: [Yarn Berry 구성](https://github.com/SeongKookKIM/yarn-berry)
  - Vite 프로젝트에 Jest 도입법: [Vite Jest 도입](https://github.com/SeongKookKIM/react-jest)
  - Vite + React 설정: [Vite React 세팅](https://github.com/SeongKookKIM/vite-react)

  이를 통해 프로젝트 초기 설정 문제를 해결하고, **Yarn Berry**와 **Vite + React** 환경에서 **Jest**를 정상적으로 설정할 수 있었습니다.

### 2. 이미지 리사이징 문제

- **문제**:  
  React-quill에서는 이미지 리사이징을 지원하는 라이브러리가 많았지만, 대부분 TypeScript와 호환되지 않았습니다.

- **해결 방법**:  
  **@xeger/quill-image-actions**와 **@xeger/quill-image-formats** 라이브러리를 사용하여 React-quill에서 이미지 리사이징을 구현했습니다. 이를 통해 이미지 크기를 자유롭게 조절할 수 있게 되었습니다.

  ```ts
  // react-quill Image Resizing
  import { ImageActions } from "@xeger/quill-image-actions";
  import { ImageFormats } from "@xeger/quill-image-formats";

  Quill.register("modules/imageActions", ImageActions);
  Quill.register("modules/imageFormats", ImageFormats);
  ```

### 3. XSS 방지 문제

- **문제**:  
  HTML을 `dangerouslySetInnerHTML`로 설정하는 방식은 **Cross Site Scripting(XSS)** 공격에 취약하다는 문제점이 있었습니다.

- **해결 방법**:  
  이를 방지하기 위해 **isomorphic-dompurify** 라이브러리를 사용하여 HTML을 **sanitize(정화)** 처리한 후, 안전하게 HTML을 렌더링할 수 있도록 구현했습니다.
  ```ts
  <PostContentBox
    className="view ql-editor" // react-quill css
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(content),
     }}
  />
  ```

### 4. 환경변수 사용 문제 (Vite)

- **문제**:  
  Vite에서 .env 파일의 환경변수를 사용하려고 할 때, 일반적인 방식으로는 변수를 읽을 수 없었습니다.

- **해결 방법**:  
  Vite에서는 환경변수를 **`import.meta.env.이름`** 형태로 사용해야 한다는 점을 파악하여 문제를 해결했습니다.

### 5. 단위 테스트 중 발생한 문제

- **문제**:  
  React-router-dom을 사용하는 컴포넌트의 단위 테스트 중 **MemoryRouter**로 감싸지 않으면 오류가 발생했습니다. 또한, **React-query**를 사용하는 경우에는 **QueryClientProvider**로 감싸주지 않으면 테스트가 실패했습니다.

- **해결 방법**:  
  테스트 환경에서 **MemoryRouter**와 **QueryClientProvider**를 추가하여 컴포넌트가 정상적으로 렌더링되도록 설정했습니다.

```ts
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

  const renderPasswordChecked = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <PasswordChecked />
        </MemoryRouter>
      </QueryClientProvider>,
    );
  };
```

### 6. React-query 사용 시 테스트 오류 문제

- **문제**:  
  React-query의 분기 처리를 클라이언트에서 처리할 경우, 테스트에서 계속 실패가 발생했습니다. 이유는 명확하지 않았습니다.

- **해결 방법**:  
  테스트 시에만 React-query 분기 처리를 주석으로 수정하고, 테스트 환경을 개선했습니다.

  ```ts
  /* 테스트 진행시 useQuery 커스텀 훅으로 인한 오류로 주석
  console.log(isLoading);
  console.log(isError);
  console.log(error);
  */

  // useQuery 로딩 시
  if (isLoading) return <>Loading...</>;

  // useQuery 에러 시
  if (isError) return <>{error.message}</>;
  ```

### 7. Vercel 배포 문제 (bcrypt 및 MongoDB 관련 문제)

- **문제**:  
  비밀번호를 **해시화**하기 위해 **bcrypt** 라이브러리를 사용했으나, Vercel에 프로젝트를 배포하는 과정에서 **bcrypt의 네이티브 모듈**(C++로 컴파일되는 부분)이 Vercel의 서버리스 환경에서 제대로 작동하지 않아 **의존성 문제**로 인해 배포가 실패했습니다.
  다음으로, MongoDB는 데이터를 **BSON(Binary JSON)** 형식으로 저장하는데, 프로젝트에서 데이터를 처리하는 과정에서 **BSON 관련 오류**가 발생했습니다. 이는 MongoDB와의 상호작용을 위해 BSON 형식을 제대로 처리할 수 있는 라이브러리가 필요했기 때문입니다.

- **해결 방법**:

  1. **bcrypt 문제 해결**:  
     Vercel과 같은 서버리스 환경에서 네이티브 모듈을 처리할 때 발생하는 문제를 해결하기 위해, **bcrypt** 대신 **bcryptjs**로 대체했습니다. **bcryptjs**는 순수 자바스크립트로 구현된 라이브러리이므로, 네이티브 모듈 문제 없이 Vercel 환경에서 원활히 작동할 수 있었습니다. 이를 통해 비밀번호 해시화 기능을 유지하면서 배포 문제를 해결했습니다.
  2. **MongoDB BSON 문제 해결**:  
     MongoDB는 데이터를 BSON 형식으로 저장하는데, 이를 처리하기 위해 **bson** 라이브러리를 설치하여 문제를 해결했습니다. **bson** 라이브러리는 MongoDB와의 데이터 상호작용 시 필요한 변환을 처리해주며, 이로 인해 발생한 오류를 해결할 수 있었습니다. BSON은 **이진 형식의 JSON**이므로, bson 라이브러리가 이를 제대로 처리하게 하여 데이터 저장 및 조회 과정에서 발생한 문제를 해결했습니다.

### 8. Vercel 새로고침 404 에러

- **문제**:  
  배포 후 새로고침 시 **404 에러**가 발생하는 문제가 있었습니다.

- **해결 방법**:  
  Vercel에서 새로고침 시 404 에러를 해결하기 위해, `vercel.json` 파일에 아래 코드를 추가하여 해결했습니다.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

보다 정확하고 다른 문제는 [블로그](https://www.sam-blog.site/detail/Blog%20Project)를 참조해주세요.
