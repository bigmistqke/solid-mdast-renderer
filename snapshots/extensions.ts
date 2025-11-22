import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';

export const extensions = {
  gfm
};
export const mdastExtensions = {
  gfmFromMarkdown
}