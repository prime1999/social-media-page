import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  Text,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { CiMenuKebab } from "react-icons/ci";
import { BsFillChatFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";

const PostCard = ({ post }) => {
  const {
    content,
    author: { name },
    imageUrls,
    timestamp,
  } = post.data;

  const newTime = timestamp.seconds * 1000;

  return (
    <Link>
      {/* card-design starts */}
      <Card maxW="xl">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="md">{name}</Heading>
                <Text>
                  Creator, Chakra UI{" "}
                  <span className="text-darkGray">
                    <TimeAgo date={newTime} />
                  </span>
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<CiMenuKebab />}
            />
          </Flex>
        </CardHeader>
        <hr />
        <CardBody>
          <Text fontWeight="semibold" fontSize="20px">
            {content}
          </Text>
        </CardBody>
        <div className="p-2">
          <img src={imageUrls[0]} alt="Chakra UI" />
        </div>

        <CardFooter>
          <div className="flex justify-between px-4">
            <div className="flex flex-col justify-center items-center mr-4 likeButton">
              <p className="font-lato font-semibold">200</p>
              <button className="flex items-center px-2 py-1 rounded-lg justify-between">
                <div className="iconDiv">
                  <BsFillHandThumbsUpFill className="icon" />
                </div>
                <p className="ml-2 text-darkGray">like</p>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mr-4 commentButton">
              <p className="font-lato font-semibold">200</p>
              <button className="flex items-center px-2 py-1 rounded-lg justify-between">
                <div className="iconDiv">
                  <BsFillChatFill className="icon" />
                </div>
                <p className="ml-2 text-darkGray">comment</p>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mr-4 shareButton">
              <p className="font-lato font-semibold">200</p>
              <button className="flex items-center px-2 py-1 rounded-lg justify-between">
                <div className="iconDiv">
                  <IoMdShareAlt className="icon" />
                </div>
                <p className="ml-2 text-darkGray">share</p>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center viewButton">
              <p className="font-lato font-semibold">200</p>
              <button className="flex items-center px-2 py-1 rounded-lg justify-between">
                <div className="iconDiv">
                  <BiBarChart className="icon" />
                </div>
                <p className="ml-2 text-darkGray">views</p>
              </button>
            </div>
          </div>
        </CardFooter>
      </Card>
      {/* card-design ends */}
    </Link>
  );
};

export default PostCard;
