"use client";

import { FullConversationType } from "@/app/types";
import { Conversation } from "@prisma/client";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  return <div>ConversationList</div>;
};

export default ConversationList;