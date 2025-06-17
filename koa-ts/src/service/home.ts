const dbData = 'this data from server'.split(' ');

// 从数据库读取数据
export async function getData() {
    return Promise.resolve(dbData);
}
