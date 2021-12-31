interface UserObject {
    id : number 
    name : string
    ownerUuid : string
    phonenumber : string
    photo : string
    uuid : string
    isActive : boolean
    memberUuid : [member]
  }


  interface member {

        memberUuid : string
        role : string

  }


  interface root{

    userData : UserObject
  }


export default root;