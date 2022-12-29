import { Message } from "node-nats-streaming";
import { Subject, Listener, UserRegisteredEvent } from "@hpshops/common";
import { queueGroupName } from "./queue-group-name";
import { ProfileCreatedPublisher } from "../publisher/profile-created-publisher";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/dependencies";
import { createProfile_UseCase } from "../../libs/useCases";

export class UserCreatedListener extends Listener<UserRegisteredEvent> {
  subject: Subject.UserRegistered = Subject.UserRegistered;
  queueGroupName = queueGroupName;

  async onMessage(data: UserRegisteredEvent["data"], msg: Message) {
    const { name, email, userId, version } = data;


    const createdProfile = await createProfile_UseCase(dependencies).execute({
      address: "please add an address",
      email: email,
      name: name,
      image:
        "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
      userId,
      isBlocked: false,
    });


    if (createdProfile) {
      await new ProfileCreatedPublisher(natsWrapper.client).publish({
        address: createdProfile.address,
        email: createdProfile.email,
        name: createdProfile.name,
        image: createdProfile.image,
        version: createdProfile.version,
        userId: createdProfile.id,
        isBlocked: createdProfile.isBlocked,
      });

      console.log("PROFILE:CREATED PUBLISHED");
    }

    msg.ack();
  }
}
