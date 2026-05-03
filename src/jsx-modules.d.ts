declare module '*.jsx' {
  import type { ComponentType } from 'react';

  const Component: ComponentType<any>;
  export default Component;
}

declare module './components/StaggeredMenu' {
  import type { ComponentType } from 'react';

  const Component: ComponentType<any>;
  export default Component;
}

declare module './components/TiltedCard' {
  import type { ComponentType } from 'react';

  const Component: ComponentType<any>;
  export default Component;
}
