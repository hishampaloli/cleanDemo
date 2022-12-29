import { Message } from "node-nats-streaming";
import { Subject, Listener, UserBlockEvent } from "@hpshops/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import { updateUserProfile_UseCase } from "../../libs/useCases";
import dependencies from "../../config/dependencies";

export class UserBlockListener extends Listener<UserBlockEvent> {
  subject: Subject.UseBlock = Subject.UseBlock;
  queueGroupName = queueGroupName;

  async onMessage(data: UserBlockEvent["data"], msg: Message) {
    const { userId, isBlocked } = data;

    const createdProfile = await updateUserProfile_UseCase(
      dependencies
    ).execute(userId, {
      isBlocked: isBlocked,
    });

    msg.ack();
  }
}
