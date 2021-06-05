import { Controller, Get, Req, Param , Redirect, Query} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
@Get()
findAll(@Req() request : Request) : string {
    return 'Cats'
}

@Get('two')
CatRet2() : string {
    console.log('Second Cat' + 1);
    return 'Cats two'
}

@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}

@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}

}
