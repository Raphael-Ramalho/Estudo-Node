import { connection } from "../infra/sequelize/config";
import { Logger } from "../infra/utils/logger";
import { Transaction } from 'sequelize'

export abstract class BaseController {
  public logger: Logger;
  protected useTransaction: boolean;

  constructor(useTransaction = true) {
    this.useTransaction = useTransaction
  }

  public async createTransaction(): Promise<Transaction> {
    const transaction = await connection.transaction()
    this.logger.debug(`[TRANSACTION][CREATED] id: ${transaction['id']}`)

    return transaction
  }

  public async transactionRollback(transaction: Transaction) {
    if (!transaction) return

    this.logger.debug(`[TRANSACTION][ROLLBACK] id: ${transaction['id']}`)
    await transaction.rollback()
  }

  public async transactionCommit(transaction: Transaction) {
    if (!transaction) return

    this.logger.debug(`[TRANSACTION][COMMITTED] id: ${transaction['id']}`)
    await transaction.commit()
  }
}
