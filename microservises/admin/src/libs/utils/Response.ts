export class CommonResponse {
  status?: boolean;
  error?: any;
  content?: any;

  constructor({
    status = false,
    error = null,
    content = null,
  }: {
    status?: boolean;
    error?: any;
    content?: any;
  }) {
    this.content = content;
    this.status = status;
    this.error = error;
  }
}

export class ResponseError {
  status: number;
  msg: string;
  reason: string;
  url: string;
  ip: string;
  validationErrors: [];

  constructor({
    status,
    msg,
    reason,
    url,
    ip,
    validationErrors = [],
  }: {
    status: number;
    msg: string;
    reason: string;
    url: string;
    ip: string;
    validationErrors: [];
  }) {
    this.status = status;
    this.msg = msg;
    this.reason = reason;
    this.url = url;
    this.ip = ip;
    this.validationErrors = validationErrors;
  }
}

export class validationErrors {
  field: string;
  msg: string;
  constructor({ field, msg }: { field: string; msg: string }) {
    this.field = field;
    this.msg = msg;
  }
}
