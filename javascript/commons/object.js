/**
 * 객체 생성 모듈
 */
let objects = {};  

export function getObjects() {  //전체 리스트
    return objects;
}

export function createObject(objectName) { //객체 생성
    return objects[objectName] = {};
}

export function deleteObject(objectName) { //객체 삭제
    delete objects[objectName];
}

export function getObject(objectName) {
    return objects[objectName];
}

export function setObject(key, value) {
    objects[key] = value;
}


/**
 * 객체 CRUD 관리 모듈
 */
export function setValue(object, key, value) {
    object[key] = value;
}

export function getValue(object, key) {
    return object[key];    
}

export function updateValue(object, key, newValue) {
    object[key] = newValue;
}

export function deleteValue(object, deleteKey) {
    delete object[deleteKey]; 
}

/**
 * 생성자 함수를 이용한 객체 CRUD
 */
export function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);        
    }
}