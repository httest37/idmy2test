// for Android
const IDMY2_ERROR_INVALID_STATE         = -1001;
const IDMY2_ERROR_INVALID_PARAMETER     = -1002;
const IDMY2_ERROR_COMMUNICATION_FAILURE = -1003;
const IDMY2_ERROR_AUTHENTICATION        = -1004;
const IDMY2_ERROR_DEVICE_NOT_FOUND      = -1005;
const IDMY2_ERROR_BLUETOOTH_DISABLED    = -1006;
const IDMY2_ERROR_READ                  = -1007;
const IDMY2_ERROR_CANCELED              = -1008;
const IDMY2_ERROR_TIMEOUT               = -1009;

const IDMY2_CERT_CARD_STATUS_EMPTY              = 0;
const IDMY2_CERT_CARD_STATUS_MYNUMBERCARD       = 1;
const IDMY2_CERT_CARD_STATUS_DRIVERSLICENSECARD = 2;
const IDMY2_CERT_CARD_STATUS_RESIDENCECARD      = 3;

const IDMY2_CERT_KEY_MYNUMBERCARD_PW_PRINT_READ       = 0;
const IDMY2_CERT_KEY_MYNUMBERCARD_PW_PRINT_INPUT      = 1;
const IDMY2_CERT_KEY_MYNUMBERCARD_PW_PRINT_MYNUMBER   = 2;
const IDMY2_CERT_KEY_MYNUMBERCARD_PW_MYNUMBER_CONFIRM = 3;
const IDMY2_CERT_KEY_MYNUMBERCARD_PW_INPUT_MYNUMBER   = 4;
const IDMY2_CERT_KEY_MYNUMBERCARD_PW_MYNUMBER_INPUT   = 5;
const IDMY2_CERT_KEY_DRIVERSLICENSE_PIN1              = 6;
const IDMY2_CERT_KEY_DRIVERSLICENSE_PIN2              = 7;
const IDMY2_CERT_KEY_RESIDENCECARD_PIN                = 8;

const IDMY2_EMV_RESULT_CR_IC                              = 0; // EMV����CardRead IC�J�[�h�����o���ďI��
const IDMY2_EMV_RESULT_CR_MS_SVC_CODE_OFF					        = 1; // EMV����CardRead MS�J�[�h(�T�[�r�X�R�[�hIC��)�����o���ďI��
const IDMY2_EMV_RESULT_CR_MS_SVC_CODE_ON						      = 2; // EMV����CardRead MS�J�[�h(�T�[�r�X�R�[�hIC�L)�����o���ďI��
const IDMY2_EMV_RESULT_ERR_CARD_DETECT_READ					      = 3; // �J�[�h���o�ł̓ǎ��Ɏ��s
const IDMY2_EMV_RESULT_ERR_CARD_CANCEL						        = 4; // �J�[�h���o�𒆎~�����i���~���R��IDMY2_EMVTRAN_EXIT_STATE�Ɖ�j

const IDMY2_EMV_RESULT_ERR_FALLBACK_DISABLE	   			      = 6; // Pin�s�m�t�H�[���o�b�N�ł�MS�J�[�h���o���ɁAIC��MS�̉���ԍ����s��v
const IDMY2_EMV_RESULT_ERR_CARD_FORMAT				   		      = 7; // �ǎ�莸�s�A�܂��́A�t�H�[�}�b�g�ُ�ɂ��AJISI�EJISI-2�g���b�N�������ł���@�܂��͎��C�f�[�^�Í������ُ�I������
const IDMY2_EMV_RESULT_ERR_IC								              = 8; // �J�[�h�ʐM�G���[�������A�S���A�v���u���b�N�Ȃǂُ̈�J�[�h���g�p�A�܂��͑I���\�Ȏx�������@�����݂��Ȃ�
const IDMY2_EMV_RESULT_ERR_NO_APL					   		          = 9; // IC�J�[�h�ɑΉ������A�v�������݂��Ȃ�
const IDMY2_EMV_RESULT_ERR_KID								            = 10; // KID����Ɏ��s
const IDMY2_EMV_RESULT_ERR_FB_MS								          = 11; // APL���X�g�擾�����ŁA���A�v���Ȃ����Ŏ��C�t�H�[���o�b�N������
const IDMY2_EMV_RESULT_ERR_DLL								            = 12; // DLL�t�@�C�������݂��Ȃ����ADLL�̐ݒ���t�H�[�}�b�g�G���[
const IDMY2_EMV_RESULT_ERR_SEQUENCE							          = 13; // �V�[�P���X�G���[
const IDMY2_EMV_RESULT_OFFLINE_APPROVED						        = 14; // �I�t���C������Ŏ������
const IDMY2_EMV_RESULT_ONLINE 								            = 15; // �I�����C������ŏI��
const IDMY2_EMV_RESULT_ERR_OFFLINE_SERVICE_NOT_ALLOWED    = 16;	// �I�t���C������(ServiceNotAllowed)�Ŏ���s����
const IDMY2_EMV_RESULT_ERR_OFFLINE_PIN_TRY_LIMIT_EXCEEDED = 17;	// �I�t���C������(PinTryLimitExceeded)�Ŏ���s����
const IDMY2_EMV_RESULT_ERR_PIN_FALLBACK						        = 18; // PIN�s�m�t�H�[���o�b�N����
const IDMY2_EMV_RESULT_ERR_PIN_CANCEL						          = 19; // �Ïؔԍ����͂𒆎~�����i���~���R��IDMY2_EMVTRAN_EXIT_STATE�Ɖ�j

const IDMY2_EMV_RESULT_ERR_1stGAC_DENIED						      = 21; // 1stGAC����
const IDMY2_EMV_RESULT_ONLINE_APPROVED						        = 22; // �I�����C���������
const IDMY2_EMV_RESULT_ERR_Z1								              = 23; // ����s����(Z1) ���G���[�R�[�h���uZ1�v�Ƃ��A�\������ш󎚂��邱�Ƃ𐄏�
const IDMY2_EMV_RESULT_ERR_Z3								              = 24; // ����s����(Z3) ���G���[�R�[�h���uZ3�v�Ƃ��A�\������ш󎚂��邱�Ƃ𐄏�
const IDMY2_EMV_RESULT_ERR_ONLINE							            = 25; // �I�����C���s����
const IDMY2_EMV_RESULT_ERR_APL_SELECT_CANCEL					    = 26; // �A�v���P�[�V�����I���𒆎~�����i���~���R��IDMY2_EMVTRAN_EXIT_STATE�Ɖ�j
const IDMY2_EMV_RESULT_ERR_CVM_NOT_SELECT					        = 27; // NoCVM���{�s��
const IDMY2_EMV_RESULT_ERR_TERMINAL_CAPABILITIES_UNMATCH  = 28;	// CardRead�ƃL���p�r���e�B�[���قȂ�//

function idmy2Initialize(serialNumber, onSuccess, onFailure) {
    const method = 'idmy2Initialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.initialize(serialNumber);
}

function idmy2Deinitialize(onSuccess, onFailure) {
    const method = 'idmy2Deinitialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.deinitialize();
}

function idmy2EmvInitialize(onSuccess, onFailure) {
    const method = 'idmy2EmvInitialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvInitialize();
}

function idmy2EmvDeinitialize(onSuccess, onFailure) {
    const method = 'idmy2EmvDeinitialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvDeinitialize();
}

function idmy2EmvTranCardRead(req, onSuccess, onFailure) {
    const method = 'idmy2EmvTranCardRead';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvTranCardRead(JSON.stringify(req));
}

function idmy2EmvTran1stGac(req, onSuccess, onFailure) {
    const method = 'idmy2EmvTran1stGac';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvTran1stGac(JSON.stringify(req));
}

function idmy2EmvTran2ndGac(req, onSuccess, onFailure) {
    const method = 'idmy2EmvTran2ndGac';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvTran2ndGac(JSON.stringify(req));
}

function idmy2EmvTranAbort(onSuccess, onFailure) {
    const method = 'idmy2EmvTranAbort';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.emvTranAbort();
}

function idmy2CertInitialize(onSuccess, onFailure) {
    const method = 'idmy2CertInitialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certInitialize();
}

function idmy2CertDeinitialize(onSuccess, onFailure) {
    const method = 'idmy2CertDeinitialize';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certDeinitialize();
}

function idmy2CertGetCardStatus(onSuccess, onFailure) {
    const method = 'idmy2CertGetCardStatus';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetCardStatus();
}

function idmy2CertGetCollationTrialAllowableCount(pinType, onSuccess, onFailure) {
    const method = 'idmy2CertGetCollationTrialAllowableCount';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetCollationTrialAllowableCount(pinType);
}

function idmy2CertGetPrintInformation(birthDate, expirationYear, securityCode, onSuccess, onFailure) {
    const method = 'idmy2CertGetPrintInformation';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetPrintInformation(birthDate, expirationYear, securityCode);
}

function idmy2CertGetBasic4InformationForConfirmation(birthDate, expirationYear, securityCode, onSuccess, onFailure) {
    const method = 'idmy2CertGetBasic4InformationForConfirmation';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetBasic4InformationForConfirmation(birthDate, expirationYear, securityCode);
}

function idmy2CertGetBasic4InformationForInputAssistance(birthDate, expirationYear, securityCode, onSuccess, onFailure) {
    const method = 'idmy2CertGetBasic4InformationForInputAssistance';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetBasic4InformationForInputAssistance(birthDate, expirationYear, securityCode);
}

function idmy2CertGetMyNumberForConfirmation(pin, onSuccess, onFailure) {
    const method = 'idmy2CertGetMyNumberForConfirmation';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetMyNumberForConfirmation(pin);
}

function idmy2CertGetMyNumberForInputAssistance(pin, onSuccess, onFailure) {
    const method = 'idmy2CertGetMyNumberForInputAssistance';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetMyNumberForInputAssistance(pin);
}

function idmy2CertGetMyNumberCardFacePhoto(birthDate, expirationYear, securityCode, onSuccess, onFailure) {
    const method = 'idmy2CertGetMyNumberCardFacePhoto';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetMyNumberCardFacePhoto(birthDate, expirationYear, securityCode);
}

function idmy2CertGetDriversLicenseInformation(pin1, pin2, onSuccess, onFailure) {
    const method = 'idmy2CertGetDriversLicenseInformation';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetDriversLicenseInformation(pin1, pin2);
}

function idmy2CertGetResidenceCardInformation(pin, onSuccess, onFailure) {
    const method = 'idmy2CertGetResidenceCardInformation';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.certGetResidenceCardInformation(pin);
}

function idmy2DeviceGetBatteryLevel(onSuccess, onFailure) {
    const method = 'idmy2DeviceGetBatteryLevel';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.deviceGetBatteryLevel();
}

function idmy2DeviceGetFirmwareVersion(onSuccess, onFailure) {
    const method = 'idmy2DeviceGetFirmwareVersion';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.deviceGetFirmwareVersion();
}

function idmy2DeviceGetSerialNumber(onSuccess, onFailure) {
    const method = 'idmy2DeviceGetSerialNumber';
    _idmy2Responders[method] = new _idmy2Responder(onSuccess, onFailure);
    _idmy2.deviceGetSerialNumber();
}

var _idmy2Responders = {};

class _idmy2Responder {
  constructor(onSuccess, onFailure) {
    this.onSuccess = onSuccess;
    this.onFailure = onFailure;
  }
  onSuccessExec() {
      this.onSuccess();
  }
  onSuccessResultExec(result) {
      this.onSuccess(result);
  }
  onFailureExec(error) {
    this.onFailure(error)
  }
}
