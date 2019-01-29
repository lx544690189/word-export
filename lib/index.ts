import { optionsProps } from './interface';
import { saveAs } from 'file-saver';

/** html转换 */
export default class WordExport {

  private config: optionsProps = {
    name: 'down',
    content: '',
    href: window ? window.location.href : '',
    style: '',
  };

  constructor(options: optionsProps) {
    this.config = {
      ...this.config,
      ...options,
    };
  }

  public export() {
    const { name, content, href, style } = this.config;
    const template = `Mime-Version: 1.0
Content-Base: ${href}
Content-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"
--NEXT.ITEM-BOUNDARY
Content-Type: text/html; charset="utf-8"
Content-Location: ${href}

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>

<style>${style}</style>

${content}

</body>
</html>

--NEXT.ITEM-BOUNDARY
Content-Location: ${href}
Content-Type: data:
Content-Transfer-Encoding: data:
--NEXT.ITEM-BOUNDARY--`;
    const blob = new Blob([template], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${name}.doc`);
  }
}
