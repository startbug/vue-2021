import db from '../db/index.js'

//ES6按需导出语法,将getAllUser方法导出去
export async function getAllUser(req, res) {
    try {
        const [result] = await db.query('select * from t_user');
        //响应数据
        res.send({
            status: 0,
            message: '获取用户列表数据成功',
            data: result
        })
    } catch (err) {
        res.send({
            status: 1,
            message: '获取用户信息失败',
            desc: err.message
        })
    }
}