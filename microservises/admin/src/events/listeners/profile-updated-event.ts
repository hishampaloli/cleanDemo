import { Message } from "node-nats-streaming";
import { Subject, Listener, ProfileUpdatedEvent } from "@hpshops/common/build";
import { queueGroupName } from "./queue-group-name";
import { updateUserProfile_UseCase } from "../../libs/useCases";
import depentencies from "../../config/depentencies";
export class ProfileUpdateListener extends Listener<ProfileUpdatedEvent> {
  subject: Subject.ProfileUpdated = Subject.ProfileUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProfileUpdatedEvent["data"], msg: Message) {
    const { userId, image, address } = data;

    console.log("evenr in admin");

    const updatedProfile = await updateUserProfile_UseCase(
      depentencies
    ).execute(userId, { image, address });

    console.log("********");
    console.log(updatedProfile);
    console.log("********");
    msg.ack();
  }
}
