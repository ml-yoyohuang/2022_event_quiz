/**
 * 測試函數是否正常，屬性 unit test 部份
 */
import {
  isTWIDCard,
  isEmail,
  isMobileNumber,
  isPassword,
  isDate,
  isBirthDay,
} from '../validate';

describe('validate', () => {
  test('isTWIDCard', () => {
    expect(isTWIDCard('a123456789')).toBeTruthy();
    expect(isTWIDCard('A102795683')).toBeTruthy();
    expect(isTWIDCard('A189062449')).toBeTruthy();
    expect(isTWIDCard('a123456789')).toBeTruthy();
    expect(isTWIDCard('A163470343')).toBeTruthy();
    expect(isTWIDCard('K141374967')).toBeTruthy();
    expect(isTWIDCard('F125251223')).toBeTruthy();
    expect(isTWIDCard('U120175800')).toBeTruthy();
    expect(isTWIDCard('R223167630')).toBeTruthy();
    expect(isTWIDCard('N279184664')).toBeTruthy();
    expect(isTWIDCard('N294257793')).toBeTruthy();
    expect(isTWIDCard('F284390945')).toBeTruthy();
    expect(isTWIDCard('Z269128930')).toBeTruthy();
    expect(isTWIDCard('N224511193')).toBeTruthy();

    expect(isTWIDCard('a1234567890000')).toBeFalsy();
    expect(isTWIDCard('D120891731')).toBeFalsy();
    expect(isTWIDCard('D120891731sdsfsdf')).toBeFalsy();
    expect(isTWIDCard('a123456780')).toBeFalsy();
    expect(isTWIDCard('F125251229')).toBeFalsy();
    expect(isTWIDCard('N224511191')).toBeFalsy();
    expect(isTWIDCard('N224511192')).toBeFalsy();
    expect(isTWIDCard('')).toBeFalsy();
    expect(isTWIDCard('1234567')).toBeFalsy();
    expect(isTWIDCard('o123456789')).toBeFalsy();
    expect(isTWIDCard()).toBeFalsy();
  });

  test('isEmail', () => {
    expect(isEmail('milkmidi@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi.test@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi+jp@gmail.com')).toBeTruthy();

    expect(isEmail('milkmidigmail.com')).toBeFalsy();
    expect(isEmail('milkmidigmail')).toBeFalsy();
    expect(isEmail()).toBeFalsy();
  });

  test('isMobileNumber', () => {
    expect(isMobileNumber('0912345678')).toBeTruthy();
    expect(isMobileNumber('0987654321')).toBeTruthy();
    expect(isMobileNumber('0945798438')).toBeTruthy();

    expect(isMobileNumber('987878777')).toBeFalsy();
    expect(isMobileNumber('milkmidi')).toBeFalsy();
    expect(isMobileNumber()).toBeFalsy();
  });

  test('isPassword', () => {
    expect(isPassword('AA12345678')).toBeTruthy();
    expect(isPassword('9888046AAAA')).toBeTruthy();

    expect(isPassword('0000000000')).toBeFalsy();
    expect(isPassword('')).toBeFalsy();
    expect(isPassword('1234567')).toBeFalsy();
    expect(isPassword('123456A')).toBeFalsy();
  });

  test('isDate', () => {
    expect(isDate(Date.now())).toBeTruthy();
    expect(isDate('1981/09/09')).toBeTruthy();

    expect(isDate('')).toBeFalsy();
    expect(isDate('Fake')).toBeFalsy();
  });

  test('isBirthDay', () => {
    expect(isBirthDay('1981/09/09')).toBeTruthy();
    expect(isBirthDay('1981/9/9')).toBeTruthy();
    expect(isBirthDay('2000/1/1')).toBeTruthy();
    expect(isBirthDay('2000/2/28')).toBeTruthy();
    expect(isBirthDay('2000/02/28')).toBeTruthy();

    expect(isBirthDay('')).toBeFalsy();
    expect(isBirthDay('20200/11/33')).toBeFalsy();
    expect(isBirthDay('2020/00/00')).toBeFalsy();
    expect(isBirthDay('20201/00/00')).toBeFalsy();
    expect(isBirthDay('20201/1/50')).toBeFalsy();
    expect(isBirthDay('2020/13/50')).toBeFalsy();
    expect(isBirthDay('2020/12/32')).toBeFalsy();
    expect(isBirthDay('Fake')).toBeFalsy();
  });
});
