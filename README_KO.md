[page-spy]: https://github.com/HuolalaTech/page-spy.git 'page-spy'
[license-img]: https://img.shields.io/github/license/HuolalaTech/page-spy-web?label=License
[license-url]: https://github.com/HuolalaTech/page-spy-web/blob/main/LICENSE
[release-img]: https://img.shields.io/github/package-json/v/HuolalaTech/page-spy-web/release?label=Release
[release-url]: https://github.com/HuolalaTech/page-spy-web/blob/release/package.json
[download-img]: https://img.shields.io/npm/dw/%40huolala-tech/page-spy-api
[download-url]: https://www.npmjs.com/package/@huolala-tech/page-spy-api
[browser-ver-img]: https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=page-spy-browser&color=orange
[browser-ver-url]: https://npmjs.com/package/@huolala-tech/page-spy-browser
[uniapp-ver-img]: https://img.shields.io/npm/v/@huolala-tech/page-spy-uniapp?label=page-spy-uniapp&color=#2B993A
[uniapp-ver-url]: https://npmjs.com/package/@huolala-tech/page-spy-uniapp
[wechat-ver-img]: https://img.shields.io/npm/v/@huolala-tech/page-spy-wechat?label=page-spy-wechat&color=#0CC160
[wechat-ver-url]: https://npmjs.com/package/@huolala-tech/page-spy-wechat
[sdk-build-img]: https://img.shields.io/github/actions/workflow/status/HuolalaTech/page-spy/coveralls.yml?logo=github&label=build
[sdk-build-url]: https://github.com/HuolalaTech/page-spy/actions/workflows/coveralls.yml
[sdk-coveralls-img]: https://img.shields.io/coverallsCoverage/github/HuolalaTech/page-spy?label=coverage&logo=coveralls
[sdk-coveralls-url]: https://coveralls.io/github/HuolalaTech/page-spy?branch=main
[api-ver-img]: https://img.shields.io/github/v/tag/HuolalaTech/page-spy-api?label=API%20version
[api-ver-url]: https://github.com/HuolalaTech/page-spy-api/tags
[api-go-img]: https://img.shields.io/github/go-mod/go-version/HuolalaTech/page-spy-api?label=go
[api-go-url]: https://github.com/HuolalaTech/page-spy-api/blob/master/go.mod

<div align="center">
  <img src="./logo.svg" height="100" />

  <h1>Page Spy</h1>

[![Release][release-img]][release-url]
[![license][license-img]][license-url] <br />
[![Build Status][sdk-build-img]][sdk-build-url]
[![Coverage Status][sdk-coveralls-img]][sdk-coveralls-url] <br />
[![Browser version][browser-ver-img]][browser-ver-url]
[![UniApp version][uniapp-ver-img]][uniapp-ver-url]
[![Wechat version][wechat-ver-img]][wechat-ver-url] <br />
[![API Version][api-ver-img]][api-ver-url]
[![Go Version][api-go-img]][api-go-url]

<a href="https://www.producthunt.com/posts/pagespy?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pagespy" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=429852&theme=light" alt="PageSpy - Remote&#0032;debugging&#0032;as&#0032;seamless&#0032;as&#0032;local&#0032;debugging&#0046; | Product Hunt" height="36" /></a> <a href="https://news.ycombinator.com/item?id=38679798" target="_blank"><img src="https://hackernews-badge.vercel.app/api?id=38679798" alt="PageSpy - Remote&#0032;debugging&#0032;as&#0032;seamless&#0032;as&#0032;local&#0032;debugging&#0046; | Hacker News" height="36" /></a>

English | [中文](./README_ZH.md) | [日本語](./README_JA.md) | [한국어](./README_KO.md)

</div>

## Intro

**PageSpy**는 웹 프로젝트를 위한 원격 디버깅 도구입니다.

캡슐화된 네이티브 웹 API가 호출될 때, 메서드의 파라미터를 필터링 및 변환하고 PageSpy Client에서 사용할 수 있도록 특정 형식의 메시지로 변환합니다. PageSpy는 받은 메시지를 쉽게 볼 수 있도록 대화형 개발 도구와 같은 UI를 제공합니다. 디버거는 메시지 데이터를 수신한 후 쉽게 볼 수 있도록 대화형 개발도구 (devtools-like)로 UI를 제시합니다.

![Home](./.github/assets/dashboard-en.png)

## 언제 사용하는 것이 좋을까요?

<u>로컬 개발자 도구로 디버깅을 할 수 없다면 **PageSpy**를 사용할 때입니다.</u> 예시 몇가지를 살펴보겠습니다.

- Webview 디버깅: 과거에도 Webview에서 정보를 표시할 수 있는 패널을 제공하는 제품이 있었지만, 모바일 장치의 작은 화면으로 인해 작업이 불편하고 표시가 사용자 친화적이지 않았습니다. 정보가 잘린다는 문제점도 흔히 발생합니다.
- 원격 협업: 이메일, 전화, 화상 회의와 같은 기존의 커뮤니케이션은 비효율적이며, 오류 정보가 완전하지 않아 오해와 오류 판단이 발생할 수 있습니다.
- 사용자 장치의 화면이 흰색으로 나타날 때: 데이터 모니터링 및 로그 분석과 같은 기존의 문제 해결 방법은 문제 해결자가 비즈니스 요구 사항과 기술 구현을 이해해야 합니다.

이러한 문제들의 공통점은 개발자가 콘솔을 사용할 때와 같이 런타임 정보를 쉽게 볼 수 없다는 것입니다.

이것을 위해서, PageSpy는 디버깅 측에서 프로젝트의 실시간 뷰를 제공합니다. 원격 협업 시, 테스터는 더 이상 텍스트, 스크린샷, 음성 메시지 또는 화면 녹화를 통해 기술 인력에게 오류 정보를 제공할 필요가 없습니다.

## 사용 방법

데이터 보안을 보장하고 사용을 용이하게 하기 위해, 우리는 포괄적이고 즉시 사용 가능한 배포 솔루션을 제공합니다. 개발자는 자신의 상황에 따라 배포 방법을 선택할 수 있습니다.

### 옵션 1: 도커로 배포하기

> Video tutorial:
>
> <a href="https://www.youtube.com/watch?v=AYD84Kht5yA" target="_blank"><img src="./.github/assets/video-docker-en.jpg" width="320" /></a>

```bash
docker run -d --restart=always -p 6752:6752 --name="pageSpy" ghcr.io/huolalatech/page-spy-web:latest
```

배포가 성공하면 브라우저를 열고 `<host>:6752` 에 접속하면 `Inject SDK` 메뉴가 상단에 표시되며 메뉴를 클릭하면 비즈니스 프로젝트 구성 및 통합 방법을 찾을 수 있습니다.

### 옵션 2: Node.js로 배포하기

> Video tutorial:
>
> <a href="https://www.youtube.com/watch?v=5zVnFPjursQ" target="_blank"><img src="./.github/assets/video-node-en.jpg" width="320" /></a>

```bash
yarn global add @huolala-tech/page-spy-api@latest

# if you use npm

npm install -g @huolala-tech/page-spy-api@latest
```

다운로드가 완료되면 명령줄에서 `page-spy-api`를 직접 실행하여 서비스를 시작할 수 있습니다. 배포가 완료되면 브라우저를 열고 `<host>:6752` 에 접속하면 `Inject SDK` 메뉴가 상단에 표시되며, 이 메뉴를 클릭하면 프로젝트 구성 및 통합 방법을 알 수 있습니다.

## Community

Join us on our [Official Discord Server](https://discord.gg/ERPpNZkX)!

## Roadmap

Click to see the [Roadmap](https://github.com/orgs/HuolalaTech/projects/1).

## How to contribute?

Click to see the [Contributing](./CONTRIBUTING.md).

## FAQ

Click to see the [FAQ](https://github.com/HuolalaTech/page-spy-web/wiki/faq).
