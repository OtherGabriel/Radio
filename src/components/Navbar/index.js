import Link from "next/link";

import {
  Room,
  Title,
  CollectionLinks,
  CollectionLink
} from "./style";

export function Navbar () {
  return (
    <Room>
      <Title>
        <Link href="/">Radio GM</Link>
      </Title>

      <CollectionLinks>
        <CollectionLink>
          <Link href="/player">player</Link>
        </CollectionLink>

        <CollectionLink>
          <Link href="/generos">gêneros</Link>
        </CollectionLink>        
      </CollectionLinks>
    </Room>
  )
}
