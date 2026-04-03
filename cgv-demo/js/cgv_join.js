/**
 * DOM 객체 생성 후 객체별 회원가입 이벤트 호출
 */
window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');
    let cpwdMsg = document.querySelector('#cpwdMsg');
    let nameMsg = document.querySelector('#nameMsg');
    let phoneMsg = document.querySelector('#phoneMsg');
    let emailMsg = document.querySelector('#emailMsg');

    /** 아이디 체크 */
    id.addEventListener('input', () => {
        if(id.value.trim() !== '') {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline-block';
        }
    });
    /** 비밀번호 체크 */
    pwd.addEventListener('input', () => {
        if(pwd.value.trim() !== '') {
            pwdMsg.style.display = 'none';
        } else {
            pwdMsg.style.display = 'inline-block';
        }
    });
    /** 비밀번호 확인 체크 */
    cpwd.addEventListener('input', () => {
        if(cpwd.value.trim() !== '') {
            cpwdMsg.style.display = 'none';
        } else {
            cpwdMsg.style.display = 'inline-block';
        }
    });
    /** 이름 체크 */
    name.addEventListener('input', () => {
        if(name.value.trim() !== '') {
            nameMsg.style.display = 'none';
        } else {
            nameMsg.style.display = 'inline-block';
        }
    });
    /** 전화번호 체크 */
    phone.addEventListener('input', () => {
        if(phone.value.trim() !== '') {
            phoneMsg.style.display = 'none';
        } else {
            phoneMsg.style.display = 'inline-block';
        }
    });
    /** 이메일주소 체크 */
    emailname.addEventListener('input', () => {
        if(emailname.value.trim() !== '') {
            emailMsg.style.display = 'none';
        } else {
            emailMsg.style.display = 'inline-block';

        }
    });
    /** 이메일도메인 체크 */
    emaildomain.addEventListener('change', () => {
        if(emaildomain.value !== 'default') {
            emailMsg.style.display = 'none';
        } else {
            emailMsg.style.display = 'inline-block';
        }
    });


    /** 가입하기 버튼 이벤트 */
    btnSignup.addEventListener('click', () => {
        let isValid = true;

        if(id.value.trim() === '') {
            idMsg.style.display = 'inline-block';
            isValid = false;
        } else {
            if(isValid) {
                console.log('서버 전송 --> ', id.value );
                
            }
        }

    });




}) //window event