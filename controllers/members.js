const fs = require('fs')
const data = require("../data.json")
const  { age, date } = require('../utils')



exports.index = function(req, res) {
    return res.render("members/index", { members: data.members})
}
// show
exports.show = function (req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id 
    })

    if (!foundMember) {
        return res.send("Instrutor não encontrado")
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay,
    }

    return res.render("members/show", { member } )
}
//create
exports.create = function(req, res){
    return res.render("members/create")
}
//post
exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    
    for (key of keys) {
       if (req.body[key] == "") {
           return res.send('Preencha todos os campos')
       }
    }

    
    birth = Date.parse(req.body.birth)

    let id = 1
    const lastMember = data.members[data.members.length]

    if (lastMember) {
        id = lastMember.id
    }

    data.members.push({
        ...req.body,
        id,
        birth,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Erro ao escrever arquivo")

        return res.redirect(`/members/${id}`)
    })

   // return res.send(req.body)
}
//edit
exports.edit = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id 
    })

    if (!foundMember) {
        return res.send("Instrutor não encontrado")
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }

    return res.render('members/edit', { member })
}
//update
exports.put = function(req, res) {
    const { id } = req.body

    let index = 0

    const foundMember = data.members.find(function(member, foundIndex) {
        if ( member.id == id ) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember) {
        return res.send("Instrutor não encontrado")
    }

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write error")

        return res.redirect(`/members/${id}`)
    })
}
//delete
exports.delete = function(req, res) {
    const { id } = req.body
    
    const filteredMember = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredMember

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write error")

        return res.redirect('/members')
    })
}