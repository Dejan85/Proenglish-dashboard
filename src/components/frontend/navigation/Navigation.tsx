import { Nav, Logo, Ul, Li, LinkWrapper } from "./styles";
import logoImg from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <Nav>
      <Logo>
        <Image src={logoImg} alt="logo" />
      </Logo>
      <Ul>
        <Li>
          <Link href="/dashboard/title" passHref>
            <LinkWrapper>Title</LinkWrapper>
          </Link>

          {/* <Ul>
            <Li>
              <Link href="/dashboard/title/add-title" passHref>
                <LinkWrapper>Add Title</LinkWrapper>
              </Link>
            </Li>
            <Li>
              <Link href="/dashboard/title/add-title" passHref>
                <LinkWrapper>Edit Title</LinkWrapper>
              </Link>
            </Li>
          </Ul> */}
        </Li>

        <Li>
          <Link href="/dashboard/blog" passHref>
            <LinkWrapper>Blog</LinkWrapper>
          </Link>

          {/* <Ul>
            <Li>
              <Link href="/dashboard/blog/add-blog" passHref>
                <LinkWrapper>Add Blog</LinkWrapper>
              </Link>
            </Li>
            <Li>
              <Link href="/dashboard/blog/edit-blog" passHref>
                <LinkWrapper>Edit Blog</LinkWrapper>
              </Link>
            </Li>
          </Ul> */}
        </Li>

        <Li>
          <Link href="/dashboard/events" passHref>
            <LinkWrapper>Events</LinkWrapper>
          </Link>
          {/* <Ul>
            <Li>
              <Link href="/dashboard/events/add-events" passHref>
                <LinkWrapper>Add Events</LinkWrapper>
              </Link>
            </Li>
            <Li>
              <Link href="/dashboard/events/edit-events" passHref>
                <LinkWrapper>Edit Events</LinkWrapper>
              </Link>
            </Li>
          </Ul> */}
        </Li>

        <Li>
          <Link href="/dashboard/about" passHref>
            <LinkWrapper>About</LinkWrapper>
          </Link>
          {/* <Ul>
            <Li>
              <Link href="/dashboard/events/add-about" passHref>
                <LinkWrapper>Add About</LinkWrapper>
              </Link>
            </Li>
            <Li>
              <Link href="/dashboard/About/edit-about" passHref>
                <LinkWrapper>Edit About</LinkWrapper>
              </Link>
            </Li>
          </Ul> */}
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
