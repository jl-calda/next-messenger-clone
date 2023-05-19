"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";

interface AvatarGroupProps {
  users: User[];
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
  const slicedUsers = users.slice(0, 4);
  return (
    <div className="h-11 w-11 grid gap-x-[1px] gap-y-[1px] grid-cols-2 grid-rows-2">
      {slicedUsers.map((user, index) => (
        <div key={crypto.randomUUID()} className="h-[21px] w-[21px]">
          <Image
            width={21}
            height={21}
            className="rounded-full"
            alt="avatar"
            src={user?.image || "/images/placeholder.jpg"}
          />
        </div>
      ))}
      {slicedUsers.length > 4 && (
        <div className="h-[21] w-[21] rounded-full flex items-center justify-center bg-white">
          <IoAddOutline size={18} color="gray" />
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
