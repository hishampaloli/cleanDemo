import { Publisher, Subject, UserBlockEvent } from "@hpshops/common/build";

export class UserBlockPublisher extends Publisher<UserBlockEvent> {
  subject: Subject.UseBlock = Subject.UseBlock;
}
