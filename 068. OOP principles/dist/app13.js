const json = { email: 'Test', pwd: 'test' };
class ServerPost {
    controller(json) {
        return this.service(json);
    }
    service(json) {
        return this.repository(json);
    }
    repository(json) {
        const arr_13 = [
            { "email": "Test1", "pwd": "test1" },
            { "email": "Test2", "pwd": "test2" },
            { "email": "Test3", "pwd": "test3" },
            { "email": "Test4", "pwd": "test4" }
        ];
        const res_13 = arr_13.every((el) => el.email != json.email);
        if (res_13)
            arr_13.push(json);
        else
            throw new Error('such an Email al ready existststs');
        return arr_13;
    }
}
const serverPost = new ServerPost();
console.log(serverPost.controller(json));
