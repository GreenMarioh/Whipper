module.exports = {
    commands: ['add', 'sum'],
    expectedArgs: '<num1> <num2>',
    permissionerror: 'You dont have the perms',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]
        message.reply(num1 + num2)
    },
    requiredRoles: [],
    permissions: []
}