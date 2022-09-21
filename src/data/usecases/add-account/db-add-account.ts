import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from "./db-add-account-protocols";
export class DbAddAccount implements AddAccount{
    private readonly encrypter: Encrypter;
    private readonly addAccountRepositorty: AddAccountRepository;

    constructor(encrypter: Encrypter, addAccountRepository: AddAccountRepository){
        this.encrypter = encrypter;
        this.addAccountRepositorty = addAccountRepository;
    }

    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const hashedPassaword = await this.encrypter.encrypt(accountData.password);
        this.addAccountRepositorty.add(Object.assign({}, accountData, { password: hashedPassaword }));
        return new Promise(resolve => resolve(null));
    }
}