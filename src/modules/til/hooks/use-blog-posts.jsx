// @ts-nocheck
import { useState, useEffect } from 'react';

export function useBlogPosts(apiFn) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const inlineCodeBlocks = document.querySelectorAll(':not(pre)>code');
    inlineCodeBlocks.forEach((block) => block.classList.add('language-none'));
    window.Prism.highlightAll();
  }, [posts]);

  useEffect(() => {
    (async () => {
      const data = await apiFn();
      if (data.data.length) setPosts(data.data);
      else setPosts([data.data]);
      window.Prism.highlightAll();
    })();
  }, []);

  return [posts, setPosts];
}
