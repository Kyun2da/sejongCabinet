export const EMAIL_ALREADY_IN_USE = '이미 존재하는 이메일 입니다.';
export const AUTH_WRONG_PASSWORD = '비밀번호가 일치하지 않습니다.';
export const TOO_MANY_REQUESTS =
  '너무 많은 횟수로 비밀번호를 틀리셨습니다. 잠시후에 다시 시도해 주세요.';
export const CLAIMS_TOO_LARGE =
  '클레임 페이로드가 최대 허용 크기인 1,000바이트를 초과합니다.';
export const EMAIL_ALREADY_EXIST = '이미 존재하는 이메일 입니다.';
export const ID_TOKEN_EXPIRED = '제공된 토큰이 만료되었습니다.';
export const ID_TOKEN_REVOKED = 'ID 토큰이 취소되었습니다.';
export const INSUFFICIENT_PERMISSION =
  'Admin SDK 초기화에 사용된 사용자 인증 정보에는 요청한 인증 리소스에 액세스할 권한이 없습니다';
export const INTERNAL_ERROR =
  '인증 서버에서 요청을 처리하려고 시도하는 중에 예기치 않은 오류가 발생했습니다.';
export const INVALID_ARGUMENT = '인증 메서드에 잘못된 인수가 제공되었습니다.';
export const INVALID_CLAIMS =
  'setCustomUserClaims()에 제공된 커스텀 클레임 속성이 잘못되었습니다.';
export const INVALID_CONTINUE_URI =
  '연결 URL은 올바른 URL 문자열이어야 합니다.';
export const INVALID_CREATION_TIME =
  '생성 시간이 올바른 UTC 날짜 문자열이어야 합니다.';
export const INVALID_CREDENTIAL =
  'Admin SDK 인증에 사용된 사용자 인증 정보로는 원하는 작업을 수행할 수 없습니다';
export const INVALID_DISABLE_FIELD =
  'disabled 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 부울이어야 합니다.';
export const INVALID_DISPLAY_NAME =
  'displayName 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 비어 있지 않은 문자열이어야 합니다.';
export const INVALID_DYNAMIC_LINK_DOMAIN =
  '제공된 동적 링크 도메인이 구성되지 않거나 현재 프로젝트에 대해 승인되지 않았습니다.';
export const INVALID_EMAIL =
  '존재하지 않는 이메일이거나 이메일의 올바른 형식이 아닙니다.';
export const INVALID_EMAIL_VERIFIED =
  'emailVerified 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 부울이어야 합니다.';
export const INVALID_HASH_ALGORITHM =
  '해시 알고리즘이 지원되는 알고리즘 목록의 문자열 중 하나와 일치해야 합니다.';
export const INVALID_HASH_BLOCK_SIZE =
  '해시 블록 크기가 올바른 숫자여야 합니다.';
export const INVALID_HASH_DERIVED_KEY_LEENGTH =
  '해시에서 파생된 키 길이가 올바른 숫자여야 합니다.';
export const INVALID_HASH_KEY = '해시 키가 올바른 바이트 버퍼여야 합니다.';
export const INVALID_HASH_MEMORY_COST =
  '해시 메모리 비용이 올바른 숫자여야 합니다.';
export const INVALID_HASH_PARALLELIZATION =
  '해시 병렬 처리가 올바른 숫자여야 합니다.';
export const INVALID_HASH_ROUNDS = '해시 라운드가 올바른 숫자여야 합니다.';
export const INVALID_HASH_SALT_SEPARATOR =
  '해싱 알고리즘 솔트 구분자 필드가 올바른 바이트 버퍼여야 합니다.';
export const INVALID_ID_TOKEN =
  '제공된 ID 토큰이 올바른 데이터베이스 토큰이 아닙니다.';
export const INVALID_LAST_SIGN_IN_TIME =
  '마지막 로그인 시간이 올바른 UTC 날짜 문자열이어야 합니다.';
export const INVALID_PAGE_TOKEN =
  'listUsers()에 제공된 다음 페이지 토큰이 잘못되었습니다. 비어 있지 않은 유효한 문자열이어야 합니다.';
export const INVALID_PASSWORD =
  '비밀번호가 다릅니다. 이 값은 6글자 이상이어야 합니다.';
export const INVALID_PASSWORD_HASH =
  '비밀번호 해시가 올바른 바이트 버퍼여야 합니다.';
export const INVALID_PASSWORD_SALT =
  '비밀번호 솔트가 올바른 바이트 버퍼여야 합니다.';
export const INVALID_PHONE_NUMBER =
  'phoneNumber에 제공된 값이 잘못되었습니다. 이 값은 E.164 표준과 호환되는 비어 있지 않은 식별자 문자열이어야 합니다.';
export const INVALID_PHOTO_URL =
  'photoURL 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 문자열 URL이어야 합니다.';
export const INVALID_PROVIDER_DATA =
  'providerData가 올바른 UserInfo 객체 배열이어야 합니다.';
export const INVALID_PROVIDER_ID =
  'providerId가 지원되는 올바른 제공업체 식별자 문자열이어야 합니다.';
export const INVALID_SESSION_COOKIE_DURATION =
  '세션 쿠키 기간이 5분에서 2주 사이의 올바른 밀리초 단위 숫자여야 합니다.';
export const INVALID_UID =
  '제공된 uid는 128자(영문 기준) 이하의 비어 있지 않은 문자열이어야 합니다.';
export const INVALID_USER_IMPORT = '가져올 사용자 레코드가 잘못되었습니다.';
export const MAXIMUM_USER_COUNT_EXCEEDED =
  '가져올 수 있는 최대 사용자 수를 초과했습니다.';
export const MISSING_ANDROID_PKG_NAME =
  'Android 앱을 설치해야 할 경우 Android 패키지 이름을 제공해야 합니다.';
export const MISSING_CONTINUE_URI = '요청에 올바른 연결 URL을 제공해야 합니다.';
export const MISSING_HASH_ALGORITHM =
  '비밀번호 해시를 사용해 사용자를 가져오려면 해싱 알고리즘 및 매개변수를 제공해야 합니다.';
export const MISSING_IOS_BUNDLE_ID = '요청에 iOS 번들 ID가 누락되었습니다.';
export const MISSING_UID = '현재 작업에 uid 식별자가 필요합니다.';
export const OPERATION_NOT_ALLOWED =
  '제공된 로그인 제공업체가 Firebase 프로젝트에서 사용 중지되었습니다. Firebase Console의 로그인 방법 섹션에서 사용 설정하세요.';
export const PHONE_NUMBER_ALREADY_EXISTS =
  '제공된 phoneNumber을 기존 사용자가 이미 사용 중입니다. 각 사용자마다 phoneNumber가 고유해야 합니다.';
export const PROJECT_NOT_FOUND =
  'Admin SDK를 초기화하는 데 사용한 사용자 인증 정보에 해당하는 Firebase 프로젝트가 없습니다.';
export const RESERVED_CLAIMS =
  'setCustomUserClaims()에 제공된 하나 이상의 커스텀 사용자 클레임이 예약되어 있습니다.';
export const SESSION_COOKIE_EXPIRED =
  '제공된 Firebase 세션 쿠키가 만료되었습니다.';
export const SESSION_COOKIE_REVOKED = 'Firebase 세션 쿠키가 취소되었습니다.';
export const UID_ALREADY_EXISTS =
  '제공된 uid를 기존 사용자가 이미 사용하고 있습니다. 각 사용자마다 uid가 고유해야 합니다.';
export const UNAUTHORIZED_CONTINUE_URI =
  '연결 URL의 도메인이 허용 목록에 포함되어 있지 않습니다. Firebase Console에서 도메인을 허용해야 합니다.';
export const USER_NOT_FOUND =
  '제공된 식별자에 해당하는 기존 사용자 레코드가 없습니다.';
