import { AddAccountRepository } from "../../../../data/protocols/add-account-repository";
import { AccountModel } from "../../../../domain/models/account";
import { AddAccountModel } from "../../../../domain/usecases/add-account";
import { MongoHelper } from "../helpers/mongo-helper";


export class AccountMongoRepository implements AddAccountRepository{
    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const accontCollection = MongoHelper.getCollection("accounts");
        const result = await accontCollection.insertOne(accountData);
        return MongoHelper.map(result.ops[0]);
    } 

}