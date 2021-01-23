// @ts-nocheck
import { useState, useEffect } from 'react';
import { useQueryParams } from '#commons/hooks/use-query-params';

export function useBlogPosts(apiFn) {
  // const { page, size } = useQueryParams();
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({
    page: 1,
    size: 10,
    docs_count: 10,
  });

  // useEffect(() => {
  // if (page || size) {
  // console.log('Hi');
  // if (meta.page !== page || meta.size !== size) {
  // setMeta({ ...meta, page, size });
  // }
  // }
  // }, [page, size]);

  function nextPage() {
    setMeta({
      ...meta,
      page: Math.max(1, meta.page + 1),
    });
  }

  function prevPage() {
    setMeta({
      ...meta,
      page: Math.max(1, meta.page - 1),
    });
  }

  useEffect(() => {
    const inlineCodeBlocks = document.querySelectorAll(':not(pre)>code');
    inlineCodeBlocks.forEach((block) => block.classList.add('language-none'));
    window.Prism.highlightAll();
  }, [posts]);

  useEffect(() => {
    (async () => {
      const response = await apiFn({ page: meta.page, size: meta.size });
      console.assert(['meta', 'results'].every((x) => x in response.data));
      if (['meta', 'results'].every((x) => x in response.data)) {
        setPosts(response.data.results);
        setMeta({ ...response.data.meta });
      } else setPosts([response.data]);

      window.Prism.highlightAll();
    })();
  }, [meta.page, meta.size]);

  return [
    posts,
    meta.page * meta.size > meta.docs_count ? null : nextPage,
    meta.page === 1 ? null : prevPage,
    { posts, meta },
  ];
}
