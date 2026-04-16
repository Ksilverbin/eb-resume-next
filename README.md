# eb-resume-next

Next.js App Router 기반의 이력서 웹 프로젝트입니다.

정적인 이력서 데이터를 화면에 렌더링하는 구조이며, 화면 구성은 기능 단위로 분리하고 데이터는 도메인 기준으로 관리하도록 정리했습니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript

## Run

```bash
npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm run start
```

## Project Structure

```txt
app/
src/
  entities/
    resume/
      model/
  widgets/
    resume/
      ui/
  shared/
    ui/
    lib/
      date/
```

## Architecture

이 프로젝트는 큰 규모의 FSD를 그대로 적용하기보다, 현재 규모에 맞춘 경량 레이어 구조를 사용합니다.

- `app`
  Next.js 라우트 엔트리와 전역 스타일을 담당합니다.
- `entities`
  이력서 도메인 데이터와 타입을 관리합니다.
- `widgets`
  페이지를 구성하는 큰 UI 섹션 단위를 담당합니다.
- `shared`
  여러 곳에서 재사용 가능한 공통 UI와 유틸을 둡니다.

## Resume Data

이력서 데이터는 `src/entities/resume/model` 아래에서 섹션별 JSON로 분리되어 있습니다.

- `profile.json`
- `experiences.json`
- `projects.json`
- `skills.json`
- `educations.json`
- `certificates.json`

`getResume.ts`에서 이 파일들을 조합해 하나의 `ResumeData` 형태로 반환합니다.

타입 정의는 `src/entities/resume/model/types.ts`에 있습니다.

## Edit Guide

내용 수정이 필요할 때는 아래 순서로 보면 됩니다.

1. 프로필/경력/프로젝트 같은 데이터 수정
   `src/entities/resume/model/*.json`
2. 섹션 레이아웃 수정
   `src/widgets/resume/ui/*`
3. 공통 UI 수정
   `src/shared/ui/*`
4. 전역 스타일 수정
   `app/globals.css`

## Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 빌드 결과 실행
- `npm run lint`: lint 실행
