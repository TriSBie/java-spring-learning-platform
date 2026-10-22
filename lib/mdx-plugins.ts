/**
 * Remark plugin nhỏ: đọc meta của code fence dạng
 *   ```java filename=PointsService.java
 * và gắn vào data-filename để component CodePre hiển thị tên file.
 */
interface MdastNode {
  type: string;
  meta?: string | null;
  lang?: string | null;
  data?: { hProperties?: Record<string, string> };
  children?: MdastNode[];
}

function visit(node: MdastNode, fn: (n: MdastNode) => void) {
  fn(node);
  if (node.children) node.children.forEach((c) => visit(c, fn));
}

export function remarkCodeMeta() {
  return (tree: MdastNode) => {
    visit(tree, (node) => {
      if (node.type === 'code' && node.meta) {
        const match = /filename=([^\s]+)/.exec(node.meta);
        if (match) {
          node.data = node.data ?? {};
          node.data.hProperties = { ...(node.data.hProperties ?? {}), 'data-filename': match[1] };
        }
      }
    });
  };
}
