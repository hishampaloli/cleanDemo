import { Message } from "node-nats-streaming";
import { Subject, Listener, ProductCreatedEvent } from "@hpshops/common";
import { queueGroupName } from "./queue-group-name";
import depentencies from "../../configs/depentencies";
import { createProduct_UseCase } from "../../libs/useCases";
import { natsWrapper } from "../../nats-wrapper";

export class ProductCreatedListener extends Listener<ProductCreatedEvent> {
  subject: Subject.ProductCreated = Subject.ProductCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProductCreatedEvent["data"], msg: Message) {
    const { description, id, image, price, stock, title } = data;

    try {
      const createdProduct = await createProduct_UseCase(depentencies).execute({
        description,
        id,
        image,
        price,
        stock,
        title,
      });

      console.log(createdProduct);

      msg.ack();
    } catch (error) {
      console.log(error);
    }
  }
}
