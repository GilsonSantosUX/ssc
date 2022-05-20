// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default function api(req, res){
  console.log('entrei aqui!');
  res.status(200).json(fetch("https://3000-gilsonsantosux-ssc-2mo4lg2dkzl.ws-us45.gitpod.io/std").then(data=>console.log(data)));
}
