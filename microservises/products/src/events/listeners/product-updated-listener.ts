import { Message } from "node-nats-streaming";
import { Subject, Listener, ProductUpdatedEvent } from "@hpshops/common";
import { queueGroupName } from "./queue-group-name";
import depentencies from "../../configs/depentencies";
import { updateProduct_UseCase } from "../../libs/useCases";
import { natsWrapper } from "../../nats-wrapper";

export class ProductUpdatedListener extends Listener<ProductUpdatedEvent> {
  subject: Subject.ProductUpdated = Subject.ProductUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProductUpdatedEvent["data"], msg: Message) {
    const { description, id, image, price, stock, title } = data;

    try {
      console.log(id);

      const ProductUpdated = await updateProduct_UseCase(depentencies).execute(
        id,
        { description, image, price, stock, title }
      );

      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}
