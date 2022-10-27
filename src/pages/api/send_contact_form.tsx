import type {NextApiRequest, NextApiResponse} from 'next';
import * as EmailValidator from 'email-validator';

type Data = {
  status: string
};

export default function sendContactForm(req: NextApiRequest, res: NextApiResponse<Data>) {
  const name = req.body.name || '';
  if (!name) {
    return res.status(400).json({status: 'name_error'});
  }

  const email = req.body.email || '';
  if (!email || !EmailValidator.validate(email)) {
    return res.status(400).json({status: 'email_error'});
  }

  const phone = req.body.phone || '';
  if (!phone) {
    return res.status(400).json({status: 'phone_error'});
  }

  const msg = req.body.msg;
  if (!msg) {
    return res.status(400).json({status: 'msg_error'});
  }

  res.status(200).json({status: 'ok'});
}
