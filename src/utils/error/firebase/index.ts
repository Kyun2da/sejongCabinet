import * as ERROR_MESSAGES from './errorType';

const getFirebaseErrorMessage = (code: string) => {
  let message = null;

  switch (code) {
    case 'auth/weak-password':
      message = ERROR_MESSAGES.AUTH_WEAK_PASSWORD;
      break;
    case 'auth/email-already-in-use':
      message = ERROR_MESSAGES.EMAIL_ALREADY_IN_USE;
      break;
    case 'auth/too-many-requests':
      message = ERROR_MESSAGES.TOO_MANY_REQUESTS;
      break;
    case 'auth/wrong-password':
      message = ERROR_MESSAGES.AUTH_WRONG_PASSWORD;
      break;
    case 'auth/claims-too-large':
      message = ERROR_MESSAGES.CLAIMS_TOO_LARGE;
      break;
    case 'auth/email-already-exists':
      message = ERROR_MESSAGES.EMAIL_ALREADY_EXIST;
      break;
    case 'auth/id-token-expired':
      message = ERROR_MESSAGES.ID_TOKEN_EXPIRED;
      break;
    case 'auth/id-token-revoked':
      message = ERROR_MESSAGES.ID_TOKEN_REVOKED;
      break;
    case 'auth/insufficient-permission':
      message = ERROR_MESSAGES.INSUFFICIENT_PERMISSION;
      break;
    case 'auth/internal-error':
      message = ERROR_MESSAGES.INTERNAL_ERROR;
      break;
    case 'auth/invalid-argument':
      message = ERROR_MESSAGES.INVALID_ARGUMENT;
      break;
    case 'auth/invalid-claims':
      message = ERROR_MESSAGES.INVALID_CLAIMS;
      break;
    case 'auth/invalid-continue-uri':
      message = ERROR_MESSAGES.INVALID_CONTINUE_URI;
      break;
    case 'auth/invalid-creation-time':
      message = ERROR_MESSAGES.INVALID_CREATION_TIME;
      break;
    case 'auth/invalid-credential':
      message = ERROR_MESSAGES.INVALID_CREDENTIAL;
      break;
    case 'auth/invalid-disabled-field':
      message = ERROR_MESSAGES.INVALID_DISABLE_FIELD;
      break;
    case 'auth/invalid-display-name':
      message = ERROR_MESSAGES.INVALID_DISPLAY_NAME;
      break;
    case 'auth/invalid-dynamic-link-domain':
      message = ERROR_MESSAGES.INVALID_DYNAMIC_LINK_DOMAIN;
      break;
    case 'auth/invalid-email':
      message = ERROR_MESSAGES.INVALID_EMAIL;
      break;
    case 'auth/invalid-email-verified':
      message = ERROR_MESSAGES.INVALID_EMAIL_VERIFIED;
      break;
    case 'auth/invalid-hash-algorithm':
      message = ERROR_MESSAGES.INVALID_HASH_ALGORITHM;
      break;
    case 'auth/invalid-hash-block-size':
      message = ERROR_MESSAGES.INVALID_HASH_BLOCK_SIZE;
      break;
    case 'auth/invalid-hash-derived-key-length':
      message = ERROR_MESSAGES.INVALID_HASH_DERIVED_KEY_LEENGTH;
      break;
    case 'auth/invalid-hash-key':
      message = ERROR_MESSAGES.INVALID_HASH_KEY;
      break;
    case 'auth/invalid-hash-memory-cost':
      message = ERROR_MESSAGES.INVALID_HASH_MEMORY_COST;
      break;
    case 'auth/invalid-hash-parallelization':
      message = ERROR_MESSAGES.INVALID_HASH_PARALLELIZATION;
      break;
    case 'auth/invalid-hash-rounds':
      message = ERROR_MESSAGES.INVALID_HASH_ROUNDS;
      break;
    case 'auth/invalid-hash-salt-separator':
      message = ERROR_MESSAGES.INVALID_HASH_SALT_SEPARATOR;
      break;
    case 'auth/invalid-id-token':
      message = ERROR_MESSAGES.INVALID_ID_TOKEN;
      break;
    case 'auth/invalid-last-sign-in-time':
      message = ERROR_MESSAGES.INVALID_LAST_SIGN_IN_TIME;
      break;
    case 'auth/invalid-page-token':
      message = ERROR_MESSAGES.INVALID_PAGE_TOKEN;
      break;
    case 'auth/invalid-password':
      message = ERROR_MESSAGES.INVALID_PASSWORD;
      break;
    case 'auth/invalid-password-hash':
      message = ERROR_MESSAGES.INVALID_PASSWORD_HASH;
      break;
    case 'auth/invalid-password-salt':
      message = ERROR_MESSAGES.INVALID_PASSWORD_SALT;
      break;
    case 'auth/invalid-phone-number':
      message = ERROR_MESSAGES.INVALID_PHONE_NUMBER;
      break;
    case 'auth/invalid-photo-url':
      message = ERROR_MESSAGES.INVALID_PHOTO_URL;
      break;
    case 'auth/invalid-provider-data':
      message = ERROR_MESSAGES.INVALID_PROVIDER_DATA;
      break;
    case 'auth/invalid-provider-id':
      message = ERROR_MESSAGES.INVALID_PROVIDER_ID;
      break;
    case 'auth/invalid-session-cookie-duration':
      message = ERROR_MESSAGES.INVALID_SESSION_COOKIE_DURATION;
      break;
    case 'auth/invalid-uid':
      message = ERROR_MESSAGES.INVALID_UID;
      break;
    case 'auth/invalid-user-import':
      message = ERROR_MESSAGES.INVALID_USER_IMPORT;
      break;
    case 'auth/maximum-user-count-exceeded':
      message = ERROR_MESSAGES.MAXIMUM_USER_COUNT_EXCEEDED;
      break;
    case 'auth/missing-android-pkg-name':
      message = ERROR_MESSAGES.MISSING_ANDROID_PKG_NAME;
      break;
    case 'auth/missing-continue-uri':
      message = ERROR_MESSAGES.MISSING_CONTINUE_URI;
      break;
    case 'auth/missing-hash-algorithm':
      message = ERROR_MESSAGES.MISSING_HASH_ALGORITHM;
      break;
    case 'auth/missing-ios-bundle-id':
      message = ERROR_MESSAGES.MISSING_IOS_BUNDLE_ID;
      break;
    case 'auth/missing-uid':
      message = ERROR_MESSAGES.MISSING_UID;
      break;
    case 'auth/operation-not-allowed':
      message = ERROR_MESSAGES.OPERATION_NOT_ALLOWED;
      break;
    case 'auth/phone-number-already-exists':
      message = ERROR_MESSAGES.PHONE_NUMBER_ALREADY_EXISTS;
      break;
    case 'auth/project-not-found':
      message = ERROR_MESSAGES.PROJECT_NOT_FOUND;
      break;
    case 'auth/reserved-claims':
      message = ERROR_MESSAGES.RESERVED_CLAIMS;
      break;
    case 'auth/session-cookie-expired':
      message = ERROR_MESSAGES.SESSION_COOKIE_EXPIRED;
      break;
    case 'auth/session-cookie-revoked':
      message = ERROR_MESSAGES.SESSION_COOKIE_REVOKED;
      break;
    case 'auth/uid-already-exists':
      message = ERROR_MESSAGES.UID_ALREADY_EXISTS;
      break;
    case 'auth/unauthorized-continue-uri':
      message = ERROR_MESSAGES.UNAUTHORIZED_CONTINUE_URI;
      break;
    case 'auth/user-not-found':
      message = ERROR_MESSAGES.USER_NOT_FOUND;
      break;
    default:
      break;
  }
  return message;
};

export default getFirebaseErrorMessage;
