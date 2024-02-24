const json = {
    email: 'Test', pwd: 'test'
};
class ServerPost {
    controller(json) {
        return this.service(json);
    }
    service(json) {
        return this.repository(json);
    }
    repository(json) {
        const arr;
    }
}
const ;
