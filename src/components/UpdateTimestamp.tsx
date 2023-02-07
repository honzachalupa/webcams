import { useSourcesUpdate } from "../hooks/useSourcesUpdate";

export const UpdateTimestamp: React.FC = () => {
    const update = useSourcesUpdate();

    return (
        <div className="h-[70px]">
            <div className="fixed bottom-4 flex w-full justify-center">
                <p className="m-[5px] rounded-full bg-black py-2 px-4 text-center text-xs opacity-90 shadow-custom">
                    Aktualizováno: {update.timestamp?.format("H:mm")}
                </p>
            </div>
        </div>
    );
};
