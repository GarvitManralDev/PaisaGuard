import React from "react";

function DisplayEthKeys(props) {
  const { arr } = props;
  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          {arr && arr.length > 0 ? (
            arr.map(([publicKey, privateKey], index) => {
              return (
                <div
                  key={index}
                  className="mb-6 pb-6 border-b border-gray-300 dark:border-gray-600 last:border-b-0"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2">
                      Wallet {index + 1}
                    </span>
                  </div>
                  <div className="mb-2">
                    <strong className="text-gray-800 dark:text-gray-200">
                      Public Key (Hex):
                    </strong>
                    <div className="mt-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-800 dark:text-gray-200 break-all">
                      {publicKey}
                    </div>
                  </div>
                  <div>
                    <strong className="text-gray-800 dark:text-gray-200">
                      Private Key (Hex):
                    </strong>
                    <p className="mt-1 font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded  text-gray-800 dark:text-gray-200 break-all">
                      {privateKey}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No Wallets available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayEthKeys;
