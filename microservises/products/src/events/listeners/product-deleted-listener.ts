import { Message } from "node-nats-streaming";
import { Subject, Listener, ProductDeletedEvent } from "@hpshops/common";
import { queueGroupName } from "./queue-group-name";
import depentencies from "../../configs/depentencies";
import { deleteProduct_UseCase } from "../../libs/useCases";
import { natsWrapper } from "../../nats-wrapper";

export class ProductDeletedListener extends Listener<ProductDeletedEvent> {
  subject: Subject.ProductDeleted = Subject.ProductDeleted;
  queueGroupName = queueGroupName;

  async onMessage(data: ProductDeletedEvent["data"], msg: Message) {
    const { id } = data;
console.log(id);

    try {
      const product = await deleteProduct_UseCase(depentencies).execute({
        productId: id,
      });
      console.log("DELETED");

      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}
