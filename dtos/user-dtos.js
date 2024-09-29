class UserDtos {
    email;
    id;
    phone;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.phone = model.phone;
    }
}

export default UserDtos;